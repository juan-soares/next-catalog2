export type ActionResponse =
  | { status: "" }
  | { status: "error"; message: string }
  | {
      status: "success";
      message: string;
      redirectTo: string;
    };
