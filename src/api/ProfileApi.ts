import Api from "./Api";

class ProfileApi extends Api {
  private readonly BASE_URL = "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3";

  async fetchProfileTasksGroup(): Promise<any> {
    return await super.get(`${this.BASE_URL}/mock-progress`);
  }

}

export default new ProfileApi();