import re
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
TOKEN_PATH = r'C:\dev\secretary\maria\.hermes\google_token_with_sheets.json'
SPREADSHEET_ID = '19lF12UOjNt69NgMbV_4SaAJyoR_FtoxMjg82fmSud4Q'

def parse_players(player_str):
    nums = re.findall(r'\d+', player_str)
    if not nums:
        return (999, 999), ""
    
    nums = [int(n) for n in nums]
    if len(nums) == 1:
        min_p = max_p = nums[0]
        fmt = f"({min_p})"
    else:
        min_p, max_p = nums[0], nums[-1]
        fmt = f"({min_p}-{max_p})"
        
    return (max_p, min_p), fmt

def main():
    creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    service = build('sheets', 'v4', credentials=creds)

    result = service.spreadsheets().values().get(
        spreadsheetId=SPREADSHEET_ID,
        range='リスト!A2:E'
    ).execute()

    rows = result.get('values', [])
    categories = {
        "ボードゲーム": [],
        "推理ゲーム": [],
        "マダミス": []
    }
    
    for row in rows:
        if not row or not row[0].strip():
            continue
            
        title = row[0].strip()
        cat_raw = row[1].strip() if len(row) > 1 else 'ボードゲーム'
        player_str = row[4].strip() if len(row) > 4 else ''
        
        (max_p, min_p), player_fmt = parse_players(player_str)
        
        if "マーダーミステリー" in cat_raw or "マダミス" in cat_raw:
            cat = "マダミス"
        elif "推理ゲーム" in cat_raw:
            cat = "推理ゲーム"
        else:
            cat = "ボードゲーム"
            
        categories[cat].append({
            'title': title,
            'max_p': max_p,
            'min_p': min_p,
            'fmt': player_fmt
        })

    # Sort: max_p asc, then min_p asc, then title
    for cat in categories:
        categories[cat].sort(key=lambda x: (x['max_p'], x['min_p'], x['title']))

    lines = ["【ゲームタイトル】", "◆ボードゲーム"]
    for item in categories["ボードゲーム"]:
        lines.append(f"・{item['title']}{item['fmt']}")

    lines.append("")
    lines.append("◆推理ゲーム")
    for item in categories["推理ゲーム"]:
        lines.append(f"・{item['title']}{item['fmt']}")

    lines.append("")
    lines.append("◆マダミス")
    for item in categories["マダミス"]:
        lines.append(f"・{item['title']}{item['fmt']}")

    with open(r'C:\dev\hara-ibe-links\tunagate_list.txt', 'w', encoding='utf-8') as f:
        f.write("\n".join(lines) + "\n")

    print(f"Successfully generated tunagate_list.txt (Total: {sum(len(v) for v in categories.values())} games)")

if __name__ == '__main__':
    main()
