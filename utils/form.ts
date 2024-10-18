import { FormProduct } from "./types";

export const formProductModel: FormProduct = {
    name: "",
    description: "",
    featured: false,
    thumbnailImage: null,
    modelImage: null,
    galleryImages: [],
    price: 0,
    attributes: [],
    sizes: [],
  };

export const buildFormData = (formData: FormProduct) => {
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
}