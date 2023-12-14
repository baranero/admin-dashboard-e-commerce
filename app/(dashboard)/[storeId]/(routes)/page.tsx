import prismadb from "@/lib/prismadb";
import { FC } from "react";

interface DashboardPageProps {
  params: { storeId: string }
}

const DashboardPage: FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })
  
  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
