const hre = require("hardhat");

async function main() {
  const SmartTreasury = await hre.ethers.getContractFactory("SmartTreasury");
  const ST = await SmartTreasury.deploy("0x61456BF1715C1415730076BB79ae118E806E74d2");

  await ST.deployed();

  console.log("Greeter deployed to:", ST.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });