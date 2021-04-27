#!/bin/sh

echo "Precommit: Eslint"

LIST=$(git diff-index --name-only --diff-filter=d HEAD | grep -E "(.*)\.(ts|js|html)$" | grep -v json)

#echo $LIST

if [ "$LIST" ];
then
npx eslint --quiet $LIST && npx prettier -c $LIST && exit 0;
fi

exit $?
