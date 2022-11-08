import checkWindow from "./checkWindow";

export default function isAuthed(): boolean {
  const data = checkWindow() && sessionStorage.getItem("authed");

  return data && JSON.parse(data);
}
