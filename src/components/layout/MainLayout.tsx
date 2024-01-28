import { Button, Layout } from "antd";
const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0 }}>
            <Button onClick={handleLogout}>Logout</Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
