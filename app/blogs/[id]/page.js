import Button from "@/app/components/Button";
import Image from "next/image";
import image from "@/public/huda.jpeg";
import get from "@/app/lib/get";

const singleBlog = async ({ params }) => {
  const blog = await get(params.id);
  return (
    <div>
      blog-{blog.id}, details-{blog.title}
      <Button />
      <Image src={image} alt="huda jgp" quality={100} placeholder="blur" />
    </div>
  );
};

export default singleBlog;
