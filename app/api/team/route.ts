import {  NextResponse } from "next/server";
import {
   S3Client,
   GetObjectCommand,
   ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { teamMemberData } from "@/consts/products";

export const dynamic = "force-static"

const s3Client = new S3Client({
   region: "default",
   endpoint: process.env.LIARA_ENDPOINT,
   credentials: {
      accessKeyId: process.env.LIARA_ACCESS_KEY!,
      secretAccessKey: process.env.LIARA_SECRET_KEY!,
   },
   forcePathStyle: true,
});

type ApiResponse = {
   teamMembers: {
     id: number;
     name: string;
     role: string;
     imageUrl: string;
   }[];
   error?: string;
 };

export async function GET() {
   try {
      const listCommand = new ListObjectsV2Command({
         Bucket: process.env.LIARA_BUCKET_NAME!,
         Prefix: "team/",
      });

      const listResponse = await s3Client.send(listCommand);

      const fileKeys = listResponse.Contents?.map((file) => file.Key) || [];

      const teamMembersWithImage = await Promise.all(
         teamMemberData.map(async (member) => {
            const fileKey = `team/${member.id}.png`;

            if (fileKeys.includes(fileKey)) {
               const getCommand = new GetObjectCommand({
                  Bucket: process.env.LIARA_BUCKET_NAME!,
                  Key: fileKey,
               });
               const imageUrl = await getSignedUrl(s3Client, getCommand, {
                  expiresIn: 3600,
               });

               return {
                  ...member,
                  imageUrl,
               };
            } else {
               return {
                  ...member,
                  imageUrl: "",
               };
            }
         })
      );

      const response: ApiResponse = { teamMembers: teamMembersWithImage };
      return NextResponse.json(response);
   } catch (error) {
      console.error("Error fetching team members:", error);
      const response: ApiResponse = {
         error: "Failed to fetch team members",
         teamMembers: [],
      };
      return NextResponse.json(response, { status: 500 });
   }
}
