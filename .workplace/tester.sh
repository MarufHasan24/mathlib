#!/bin/bash
# Desc: Run all test files in test folder
path=$(pwd)
echo "Running tests in $path/test/"
if [[ ! -d $path/.record ]]; then
    mkdir $path/.record
fi
if [[ ! -d $path/.record/.restored ]]; then
    mkdir $path/.record/.restored
fi
if [[ ! -d $path/.record/.trush ]]; then
    mkdir $path/.record/.trush
fi
row_count=0
pass_count=0
fail_count=0
for file in `ls $path/test/`; do
if [[ $file == *".test.js" ]]; then
    row_count=$((row_count+1))
    echo "Testing $file"
    node ./test/$file  
    echo "Done for $file"
    echo ""
    value=$(<"$path/.workplace/log.txt")
    out=()
    IFS=', ' read -ra out <<< "$value"
    pass_count=$((pass_count+${out[1]}))
    fail_count=$((fail_count+${out[2]}))
    else
    echo "unexpected file $file"
fi
done

echo "-----------------------------------"
echo "Test results"
echo "-----------------------------------"
echo ""
echo "total categories: $row_count"
total=$(expr $pass_count + $fail_count)
echo "Total tests: $total"

#remove log file
rm -rf $path/.record/*.json
rm -rf $path/.workplace/log.txt

if [[ $fail_count -eq 0 ]]; then
    echo "All tests passed"
else
    echo "Passed: $pass_count"
    echo "Failed: $fail_count"
    exit 1
fi