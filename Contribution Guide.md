# CONTRIBUTION GUIDE

## Preliminaries

- Download and install the latest stable version of [Git](https://git-scm.com/downloads) 📥 for version control
- Create a [Github](https://github.com/join) Account 📇
- Download and install latest stable version of [VS Code](https://code.visualstudio.com/download)

##   A. Setting up the Project

**1.**  Fork [this](https://github.com/smaranjitghose/awesome-portfolio-websites) repository.

<p align="center"><img src="readme_assets\Fork_Repo.gif" width="500" height="200" /></p>


**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/awesome-portfolio-websites.git
```
<p align="center"><img width=35% src="readme_assets\clone_repo.gif" width="500" height="200" /></p>

**3.** Navigate to the project directory :file_folder: .

```
cd awesome-portfolio-websites
```

**4.** Add a reference to the original repository.

```
git remote add upstream https://github.com/smaranjitghose/awesome-portfolio-websites.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```
