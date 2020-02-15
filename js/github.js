class Github {
  constructor() {
    this.client_id = 'f875b11185cc0d0441b2';
    this.client_secret = 'e4f6a2d0cddfccf70c9779c1209111b0cf1d19d3';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}