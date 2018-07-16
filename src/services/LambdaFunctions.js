import Lambda from "@/services/Lambda";

export default {
  getEmail() {
    return Lambda().get("getEmail");
  }
};
