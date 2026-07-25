import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";


class MemberService {
  private readonly path: string;
  getRestaurant: any;

  constructor() {
    this.path = serverApi;
  }

public async getTopUsers(): Promise<Member[]> {
  try {
    const url = this.path + "/member/top-users";
    const result = await axios.get(url);

console.log(result.data);
console.log(Array.isArray(result.data));
console.log("result.data,", result.data);

return result.data;
  } catch (err) {
    console.log("Error, getTopUsers", err);
    throw err;
  }
}
}

export default MemberService;