# How to install the stack

## Install NVM

### 1. Update your package lists
`sudo apt update`

### 2. Install dependencies required for NVM
`sudo apt install -y curl wget build-essential`

### 3. Download and run the NVM installation script
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

### 4. Run this to apply changes immediately:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 5. Verify NVM installation
`nvm --version`

----------------------------

## Install Node NPM and Yarn

### 1. Install the latest LTS (Long Term Support) version
`nvm install --lts`

### 2. Set a version as the default
`nvm alias default lts/*`

### 3. Verify Node.js and npm installation
```
node --version
npm --version
```

### 4. Install Yarn
```
corepack enable
yarn --version
```

### 5. Update yarn to latest version
`yarn set version stable`
