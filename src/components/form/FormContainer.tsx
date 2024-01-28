import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const FormContainer = ({ onSubmit, children }: IFormProps) => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default FormContainer;
