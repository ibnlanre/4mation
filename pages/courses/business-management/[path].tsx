import { Discipline } from "@/components";
import { businessManagement, WAIT } from "@/layouts/courses";
import { LoadingOverlay } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Course() {
  const [visible, setVisible] = useState(true);
  const { clear } = useTimeout(() => setVisible(false), WAIT, {
    autoInvoke: true,
  });
  useEffect(() => clear, [clear]);

  const { path } = useRouter().query as Record<string, any>;
  const course = businessManagement.find(({ link }) => link.endsWith(path));

  return visible || !course ? (
    <LoadingOverlay
      visible={visible}
      overlayOpacity={1}
      overlayColor="#ED143D"
      loaderProps={{
        color: "white",
      }}
    />
  ) : (
    <Discipline course={course} />
  );
}
