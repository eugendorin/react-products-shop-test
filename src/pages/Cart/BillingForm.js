import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Select, FormGroupItem } from "components";
import { useCountries } from "api";
import { useMemo } from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required("Email address is not valid"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    country: yup.string().required(),
    city: yup.string().required(),
    address: yup.string().required(),
    zip: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits")
      .required()
  })
  .required();

export default function BillingForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const { countries, isLoading: isLoadingCountries } = useCountries();
  const onSubmit = (data) => console.log(data);

  const countriesOptions = useMemo(() => {
    return countries.map(({ code, name }) => ({
      value: code,
      label: name
    }));
  }, [countries]);

  return (
    <Card.Body className="p-5">
      <Card.Title as="h2">Billing Information</Card.Title>

      <Form className="bg-white p-3" onSubmit={handleSubmit(onSubmit)}>
        <FormGroupItem label="Name" errorMessage={errors?.name?.message}>
          <Form.Control
            type="text"
            placeholder="Enter name"
            isInvalid={!!errors.name}
            {...register("name")}
          />
        </FormGroupItem>

        <FormGroupItem
          label="Email address"
          errorMessage={errors?.email?.message}
        >
          <Form.Control
            type="email"
            placeholder="Enter email"
            isInvalid={!!errors.email}
            {...register("email")}
          />
        </FormGroupItem>

        <FormGroupItem label="Phone" errorMessage={errors?.phone?.message}>
          <Form.Control
            type="phone"
            placeholder="Enter phone"
            isInvalid={!!errors.phone}
            {...register("phone")}
          />
        </FormGroupItem>

        <FormGroupItem label="Country" errorMessage={errors?.country?.message}>
          <Controller
            control={control}
            name="country"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                inputRef={ref}
                placeholder="Select country"
                options={countriesOptions}
                isLoading={isLoadingCountries}
                value={countriesOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                isInvalid={!!errors.country}
              />
            )}
          />
        </FormGroupItem>

        <FormGroupItem label="City" errorMessage={errors?.city?.message}>
          <Form.Control
            type="city"
            placeholder="Enter city"
            isInvalid={!!errors.city}
            {...register("city")}
          />
        </FormGroupItem>

        <FormGroupItem label="Address" errorMessage={errors?.address?.message}>
          <Form.Control
            type="address"
            placeholder="Enter address"
            isInvalid={!!errors.address}
            {...register("address")}
          />
        </FormGroupItem>

        <FormGroupItem label="ZIP" errorMessage={errors?.zip?.message}>
          <Form.Control
            type="zip"
            placeholder="Enter zip"
            isInvalid={!!errors.zip}
            {...register("zip")}
          />
        </FormGroupItem>

        <Button className="mx-5 mb-5" variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </Card.Body>
  );
}
