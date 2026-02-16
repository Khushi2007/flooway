const packagesPageParams = new URLSearchParams(window.location.search);
const userId = packagesPageParams.get("uid");

const gryffindorPackageLink = document.getElementById("gryffindorPackageLink");
const hogwartsPackageLink = document.getElementById("hogwartsPackageLink");
const slytherinPackageLink = document.getElementById("slytherinPackageLink");
const hufflepuffPackageLink = document.getElementById("hufflepuffPackageLink");
const forbiddenForestPackageLink = document.getElementById("forbiddenForestPackageLink");
const ravenclawPackageLink = document.getElementById("ravenclawPackageLink");

gryffindorPackageLink.setAttribute("href", `package.html?package=gryffindor&uid=${uid}`);
hogwartsPackageLink.setAttribute("href", `package.html?package=hogwarts&uid=${uid}`);
slytherinPackageLink.setAttribute("href", `package.html?package=slytherin&uid=${uid}`);
hufflepuffPackageLink.setAttribute("href", `package.html?package=hufflepuff&uid=${uid}`);
forbiddenForestPackageLink.setAttribute("href", `package.html?package=forbidden_forest&uid=${uid}`);
ravenclawPackageLink.setAttribute("href", `package.html?package=ravenclaw&uid=${uid}`);