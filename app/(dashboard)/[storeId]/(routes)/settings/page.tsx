import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FC } from "react";

interface SetingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingPage: FC<SetingsPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    
  })

  return <div>Hello Settings</div>;
};

export default SettingPage;
