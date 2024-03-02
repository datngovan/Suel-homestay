import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertProperty } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();
  const {errors} = formState;
  const { mutate, isLoading } = useMutation({
    mutationFn: insertProperty,
    onSuccess: () => {
      toast.success("new property successfully created"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function onSubmit(data) {
    mutate(data);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
      <Input disabled={isLoading}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />  
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input disabled={isLoading}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { required: "This field is required", min: {value:1, message:"Capacity has to be at least 1"} })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input disabled={isLoading}
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" , min: {value:1, message:"Capacity has to be at least 1"}})}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input disabled={isLoading}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", { required: "This field is required", validate: (value) => value <= getValues("regularPrice") || "Discount should lowwer that regular price"})}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea disabled={isLoading}
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add property</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
