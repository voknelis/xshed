import { STORAGE_KEY } from "@/store";

const storage = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");

export class RootState {}
