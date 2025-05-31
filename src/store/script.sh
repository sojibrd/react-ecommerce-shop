#!/bin/bash

# Ask for the folder name
read -p "Enter the Redux module name (e.g., 'user'): " moduleName

# Create the folder and files
mkdir -p $moduleName
cd $moduleName
touch $moduleName.action.js $moduleName.reducer.js $moduleName.selector.js $moduleName.types.js

echo "Generated Redux files for '$moduleName'!"