import { useToast } from "@/hooks/use-toast";
import { createProductAction, updateProductAction } from "@/utils/actions";
import { FormProduct, Product } from "@/utils/types";
import { useState } from "react";

const useForm = (product: FormProduct, action: string) => {
  const [formData, setFormData] = useState<FormProduct>(product);
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const submitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    const formDataToSend = buildFormData(formData);

    switch (action) {
      case "create":
        handleCreateProduct(formDataToSend);
        break;
      case "update":
        handleEditProduct(formDataToSend);
        break;
      default:
        break;
    }
  };

  const handleCreateProduct = async (formDataToSend: FormData) => {
    try {
      const { message } = await createProductAction(formDataToSend);
      toast({ description: `${message}` });
    } catch (error) {
      toast({
        description:
          error instanceof Error ? error.message : `There was an error`,
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleEditProduct = async (formDataToSend: FormData) => {
    const prevState = product as Product;

    try {
      const { message } = await updateProductAction(prevState, formDataToSend);
      toast({ description: `${message}` });
    } catch (error) {
      toast({
        description:
          error instanceof Error ? error.message : `There was an error`,
      });
    } finally {
      setIsPending(false);
    }
  };

  const updateFormData = (name: string, value: any) => {
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      return updatedState;
    });
  };

  const changeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, type, value } = e.target;

    if (type === "checkbox" && "checked" in e.target) {
      updateFormData(name, e.target.checked);
    } else {
      updateFormData(name, value);
    }
  };

  const updateInput = (
    name: string,
    value: File | Array<string | File> | null
  ) => {
    updateFormData(name, value);
  };

  const buildFormData = (formData: FormProduct) => {
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price.toString());
    formDataToSend.append("featured", formData.featured.toString());

    formDataToSend.append("attributes", JSON.stringify(formData.attributes));
    formDataToSend.append("sizes", JSON.stringify(formData.sizes));

    if (formData.thumbnailImage) {
      formDataToSend.append("thumbnailImage", formData.thumbnailImage);
    }
    if (formData.modelImage) {
      formDataToSend.append("modelImage", formData.modelImage);
    }

    if (formData.galleryImages && formData.galleryImages.length > 0) {
      formData.galleryImages.forEach((image) => {
        formDataToSend.append(`galleryImages`, image);
      });
    }
    return formDataToSend;
  };

  return {
    isPending,
    submitFormData,
    updateFormData,
    changeFormData,
    updateInput,
  };
};

export default useForm;
