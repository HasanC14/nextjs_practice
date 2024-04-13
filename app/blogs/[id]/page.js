import Button from "@/app/components/Button";
import Image from "next/image";
import image from "@/public/huda.jpeg";
import get from "@/app/lib/get";
import getAll from "@/app/lib/getAll";

const singleBlog = async ({ params }) => {
  const { id } = params;
  const blog = await get(id);
  return (
    <div>
      blog-{blog.id}, details-{blog.title}
      <Button />
      <Image src={image} alt="huda jgp" quality={100} placeholder="blur" />
    </div>
  );
};

export default singleBlog;

export const generateStaticParams = async () => {
  const blogs = await getAll();
  return blogs.map((blog) => {
    id: blog.id.toString();
  });
};
