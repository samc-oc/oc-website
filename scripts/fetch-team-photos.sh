#!/usr/bin/env bash
# Localise the team photos before launch (the wp-content URLs die at cutover).
# Run from the project root:  bash scripts/fetch-team-photos.sh
set -euo pipefail

WP="https://onlineconsulting.com.au/wp-content/uploads"
OUT="public/images/team"
mkdir -p "$OUT"

declare -a MAP=(
  "2016/07/sam.png|sam-crawford-online-consulting.png"
  "2016/11/wilma.jpg|wilma-amposta-online-consulting.jpg"
  "2018/02/jack.jpg|jackie-tuazon-online-consulting.jpg"
  "2016/10/profilepic-jeff.jpg|jeff-ernacio-online-consulting.jpg"
  "2020/02/profilepic-vince.jpg|vince-besavilla-online-consulting.jpg"
  "2016/10/profilepic-hannah.jpg|hannah-sheila-iway-online-consulting.jpg"
  "2016/11/profilepic-jarrad.jpg|jarrad-peters-online-consulting.jpg"
  "2016/11/profilepic-richard.jpg|richard-hensley-online-consulting.jpg"
  "2020/02/profilepic-thanh.jpg|thanh-le-online-consulting.jpg"
  "2016/07/team-bg.jpg|online-consulting-team-group.jpg"
)

for entry in "${MAP[@]}"; do
  src="${entry%%|*}"; dest="${entry##*|}"
  echo "↓ $dest"
  curl -fsSL "$WP/$src" -o "$OUT/$dest"
done

# Rewrite team.ts to use the local files
TS="src/lib/team.ts"
perl -pi -e "s|\\\$\\{WP\\}/2016/07/sam.png|/images/team/sam-crawford-online-consulting.png|;
s|\\\$\\{WP\\}/2016/11/wilma.jpg|/images/team/wilma-amposta-online-consulting.jpg|;
s|\\\$\\{WP\\}/2018/02/jack.jpg|/images/team/jackie-tuazon-online-consulting.jpg|;
s|\\\$\\{WP\\}/2016/10/profilepic-jeff.jpg|/images/team/jeff-ernacio-online-consulting.jpg|;
s|\\\$\\{WP\\}/2020/02/profilepic-vince.jpg|/images/team/vince-besavilla-online-consulting.jpg|;
s|\\\$\\{WP\\}/2016/10/profilepic-hannah.jpg|/images/team/hannah-sheila-iway-online-consulting.jpg|;
s|\\\$\\{WP\\}/2016/11/profilepic-jarrad.jpg|/images/team/jarrad-peters-online-consulting.jpg|;
s|\\\$\\{WP\\}/2016/11/profilepic-richard.jpg|/images/team/richard-hensley-online-consulting.jpg|;
s|\\\$\\{WP\\}/2020/02/profilepic-thanh.jpg|/images/team/thanh-le-online-consulting.jpg|;
s|\\\$\\{WP\\}/2016/07/team-bg.jpg|/images/team/online-consulting-team-group.jpg|;" "$TS"

echo "Done. Photos in $OUT, team.ts updated to local paths."
echo "Commit and push to deploy:  git add -A && git commit -m 'Localise team photos' && git push"
