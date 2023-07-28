const createContainer = (imagePath: string): void => {
  const containerRootFS: string = copyImageFiles(imagePath);

  const containerPID: number = createNamespace("pid");
  const containerNetwork: number = createNamespace("network");
  const containerMount: number = createNamespace("mount");
  const containerIPC: number = createNamespace("ipc");
  // and any other namespaces

  const containerProcess: string = prepareContainerProcess(containerRootFS);

  startContainer(
    containerProcess,
    containerPID,
    containerNetwork,
    containerIPC,
    containerMount
  );
};

const copyImageFiles = (imagePath: string): string => {
  //  cp -r $imagePath $containerDir
  return "path_to_container_rootfs";
};

const createNamespace = (type: string): number => {
  // clone(CLONE_NEWPID | CLONE_NEWNET | CLONE_NEWNS )
  return Number("namespace_id");
};

const prepareContainerProcess = (containerRootFS: string /* ... */): string => {
  //chroot $containerRootFS /bin/sh
  return "containerProcess";
};

const startContainer = (
  containerProcess: string,
  containerPID: number,
  containerNetwork: number,
  containerIPC: number,
  containerMount: number
): void => {
  // setns($containerPID); setns($containerNetwork); setns($containerIPC); setns($containerMount); exec(containerProcess);
};

const main = (): void => {
  const imagePath: string = "path_to_image";
  createContainer(imagePath);
};

main();
