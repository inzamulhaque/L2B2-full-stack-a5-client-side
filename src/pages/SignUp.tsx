import { Button, Row } from "antd";
import FormContainer from "../components/form/FormContainer";
import CustomizeInput from "../components/form/CustomizeInput";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("ok");
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <FormContainer onSubmit={onSubmit}>
          <CustomizeInput type="name" name="name" label="Name:" />

          <CustomizeInput type="email" name="email" label="Email:" />

          <CustomizeInput type="password" name="password" label="Password:" />

          <CustomizeInput
            type="password"
            name="confirmPassword"
            label="Confirm Password:"
          />

          <CustomizeInput type="address" name="address" label="Address:" />

          <CustomizeInput type="contact" name="contact" label="Contact:" />

          <div style={{ margin: "15px 0" }}>
            <p
              onClick={() => navigate("/user/signin")}
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
            >
              You Have Account?
            </p>
          </div>

          <Button htmlType="submit">SignUp</Button>
        </FormContainer>
      </Row>
    </>
  );
};

export default SignUp;
