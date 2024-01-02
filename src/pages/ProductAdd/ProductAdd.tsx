import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { passwordRule } from "../../utils/validation/customValidationRules";
import FormikInput from "../../components/FormikInput/FormikInput";
import FormikSelect from "../../components/FormikInput/FormikSelect";

type Props = {};

interface ProductAddFrom {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  colorId: number;
}

const ProductAdd = (props: Props) => {
  const colorOptions = [
    { value: 0, label: "Bir renk seçin" },
    { value: 1, label: "Kırmızı" },
    { value: 2, label: "Siyah" },
    { value: 3, label: "Beyaz" },
  ];

  const initialValues: ProductAddFrom = {
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    colorId: 0,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required()
      .min(2)
      .max(5)
      .test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    description: Yup.string().required().min(5).max(300),
    price: Yup.number().min(0),
    stock: Yup.number().min(0).integer(),
  });

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <FormikInput name="title" label="Title"></FormikInput>
          <FormikInput name="description" label="Description"></FormikInput>
          <FormikInput name="price" label="Price" type="number"></FormikInput>
          <FormikInput
            name="discountPercentage"
            label="DiscountPercentage"
            type="number"
          ></FormikInput>
          <FormikInput name="rating" label="Rating" type="number"></FormikInput>
          <FormikInput name="stock" label="Stock" type="number"></FormikInput>
          <FormikInput name="brand" label="Brand"></FormikInput>
          <FormikInput name="category" label="Category"></FormikInput>
          <FormikInput name="thumbnail" label="Thumbnail"></FormikInput>
          <FormikSelect
            name="colorId"
            label="Renk Seçimi"
            options={colorOptions}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;
