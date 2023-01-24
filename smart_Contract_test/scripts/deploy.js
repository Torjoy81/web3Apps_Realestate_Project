async function main() {
  const test_user = await ethers.getContractFactory("RealEstateUsers");

  // Start deployment, returning a promise that resolves to a contract object
  const RealEstateUsers = await test_user.deploy();
  console.log("Contract deployed to address:", RealEstateUsers.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
