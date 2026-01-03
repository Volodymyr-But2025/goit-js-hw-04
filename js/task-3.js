const profile = {
  userProfile: { username: 'Jacob', playTime: 300 },
  changeUsername(newName) {
    this.userProfile.username = newName;
  },
  updatePlayTime(hours) {
    this.userProfile.playTime = this.userProfile.playTime + hours;
  },
  getInfo() {
    return `${this.userProfile.username} has ${this.userProfile.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
