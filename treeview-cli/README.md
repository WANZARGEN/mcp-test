# treeview-cli

간단하게 디렉토리 트리 구조를 출력해주는 Node.js CLI 도구입니다. Cursor MCP와 연동하여 폴더 구조를 시각적으로 확인할 수 있습니다.

## 특징
- tree 명령어 기반의 트리 구조 출력
- path, depth 등 옵션 지원
- MCP(CURSOR)에서 바로 사용 가능

---

## 설치 및 준비

1. **tree 명령어 설치**
   ```bash
   brew install tree
   ```
2. **Node.js 설치**
   (이미 설치되어 있다면 생략)
   ```bash
   brew install node
   ```
3. **의존성 설치**
   ```bash
   cd treeview-cli
   npm install
   ```

---

## 사용법

### CLI 직접 실행
```bash
node mcp-tree.js --path <경로> --depth <깊이>
```
- 예시:
  ```bash
  node mcp-tree.js --path . --depth 2
  ```

### MCP(CURSOR) 연동 예시
`~/.cursor/mcp.json`에 아래와 같이 등록:

```json
"treeview-cli": {
  "type": "stdio",
  "command": "node",
  "args": [
    "${workspaceFolder}/mcp-tree.js",
    "--path",
    "${input:path}",
    "--depth",
    "${input:depth}"
  ],
  "env": {}
}
```

---

## 옵션
- `--path <경로>` : 트리 구조를 볼 디렉토리 경로 (기본값: 현재 디렉토리)
- `--depth <깊이>` : 트리 출력의 최대 깊이 (생략 가능)

---

## 예시 결과
```
$ node mcp-tree.js --path . --depth 2
.
├── mcp-tree.js
├── node_modules
├── package.json
└── README.md
```

---

## 라이선스
MIT 