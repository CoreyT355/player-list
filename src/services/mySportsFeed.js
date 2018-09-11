const MSF_BASE_URL = 'https://api.mysportsfeeds.com/v2.0';

class MsfService {
  async getPlayerSearchResults(query, limit = 9, offset = 0) {
    let url = `${MSF_BASE_URL}/pull/nfl/players.json?season=current`;
    if (query) {
      url += `&player=${query}`;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Basic ZWE0YjU1YzctZDc4My00ODRhLThjNmQtNTliN2ViOk1ZU1BPUlRTRkVFRFM=`
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to get Players: ${response.status}`);
    }

    const data = await response.json();
    if (!data) {
      throw new Error(`No data in response.`);
    }
    return data.players;
  }
}

export default new MsfService();
