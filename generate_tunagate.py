import json
import re

def parse_players(player_str):
    nums = re.findall(r'\d+', player_str)
    if not nums:
        return (99, 99), ""
    
    nums = [int(n) for n in nums]
    if len(nums) == 1:
        min_p = max_p = nums[0]
    else:
        min_p, max_p = nums[0], nums[-1]
        
    if min_p == max_p:
        fmt = f"({min_p})"
    else:
        fmt = f"({min_p}-{max_p})"
        
    return (min_p, max_p), fmt

def main():
    with open('sheet_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    rows = data[1:]
    
    categories = {
        "ボードゲーム": [],
        "推理ゲーム": [],
        "マダミス": []
    }
    
    for row in rows:
        if not row or len(row) < 5:
            continue
            
        title = row[0]
        cat_raw = row[1]
        player_str = row[4]
        
        sort_key, player_fmt = parse_players(player_str)
        
        if "マーダーミステリー" in cat_raw or "マダミス" in cat_raw:
            cat = "マダミス"
        elif "推理ゲーム" in cat_raw:
            cat = "推理ゲーム"
        else:
            cat = "ボードゲーム"
            
        categories[cat].append({
            "title": title,
            "sort_key": sort_key,
            "fmt": player_fmt
        })
        
    lines = ["【ゲームタイトル】"]
    order = ["ボードゲーム", "推理ゲーム", "マダミス"]
    
    for cat in order:
        if not categories[cat]:
            continue
            
        lines.append(f"◆{cat}")
        
        # Sort by Max players, then Min players
        sorted_games = sorted(categories[cat], key=lambda x: (x["sort_key"][1], x["sort_key"][0]))
        
        for g in sorted_games:
            lines.append(f"・{g['title']}{g['fmt']}")
            
        lines.append("")
        
    with open('tunagate_list.txt', 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
        
if __name__ == "__main__":
    main()
