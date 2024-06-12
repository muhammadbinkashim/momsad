import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token, user }) => {
        const baseUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:3000';
        return `
          <p>Hello ${user.email},</p>
          <p>Thank you for registering. Please click the link below to verify your email address:</p>
          <a href='${baseUrl}/verify-email?token=${token}'>Verify account</a>
        `;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Users", value: "user" },
      ],
    },
  ],
};
