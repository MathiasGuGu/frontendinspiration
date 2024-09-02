"use client";
import { PostsService } from "@/app/_services/PostsService";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClientUploadedFileData } from "uploadthing/types";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  link: z.string().url(),
});

const CreatePostDrawer = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageUrlError, setImageUrlError] = useState<string | null>(null);
  const { createNewPost, isCreateNewPostPending } = PostsService();
  const handleCreateNewPost = (
    values: z.infer<typeof formSchema>,
    imageUrl: string,
  ) => {
    createNewPost({
      imageUrl: imageUrl,
      title: values.title,
      description: values.description,
      link: values.link,
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!imageUrl) {
      setImageUrlError("Please upload an image");
      return;
    }
    handleCreateNewPost(values, imageUrl);
  }
  return (
    <Drawer>
      <DrawerTrigger
        color="black"
        className="h-fit w-fit rounded bg-black px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Create new resource
      </DrawerTrigger>
      <DrawerContent className="flex w-full items-center justify-center">
        <DrawerHeader className="mb-12 w-full max-w-[65%]">
          <DrawerTitle>Add a resource service</DrawerTitle>
          <DrawerDescription>
            This will create a new resource card. Make sure to add all the
            required information and a nice image.
          </DrawerDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(
                  event: ClientUploadedFileData<{ uploadedBy: string }>[],
                ) => {
                  setImageUrl(event[0]?.url ?? null);
                }}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource title</FormLabel>
                    <FormControl>
                      <Input placeholder="dribbble.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource description</FormLabel>
                    <FormControl>
                      <Input placeholder="Design inspiration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource link</FormLabel>
                    <FormControl>
                      <Input placeholder="https://dribbble.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="">
                {isCreateNewPostPending ? (
                  <Loader2
                    className="animate-spin"
                    size={20}
                    strokeWidth={1.5}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CreatePostDrawer;
