import { unknown } from "@/assets/images/image";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AddDoctorsInput } from "../../schema/doctors";
import { useFormContext } from "react-hook-form";

function AddPhotoDoctor() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  const photo = watch("photo");

  const previewUrl =
    photo instanceof File ? URL.createObjectURL(photo) : unknown.src;

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 shadow">
      <label
        htmlFor="photo"
        className="flex cursor-pointer flex-col items-center gap-4"
      >
        <Image
          src={previewUrl}
          alt="Clinic Profile"
          width={160}
          height={160}
          className="h-40 w-40 rounded-xl object-cover shadow"
        />

        <span className="font-medium text-blue-600 hover:text-blue-700">
          Upload Photo
        </span>
      </label>

      <Input
        id="photo"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          setValue("photo", file, {
            shouldValidate: true,
          });
        }}
      />

      {errors.photo?.message && (
        <p className="mt-1 text-sm text-red-500">
          {String(errors.photo.message)}
        </p>
      )}
    </div>
  );
}

export default AddPhotoDoctor;
