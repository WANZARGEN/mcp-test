# MCP (Model Context Protocol) Test Server

## 소개
MCP는 애플리케이션이 LLM(Large Language Models)에 컨텍스트를 제공하는 방법을 표준화하는 오픈 프로토콜입니다. MCP는 AI 애플리케이션을 위한 USB-C 포트와 같은 역할을 합니다. USB-C가 다양한 주변 기기와 액세서리에 연결하는 표준화된 방법을 제공하는 것처럼, MCP는 AI 모델을 다양한 데이터 소스와 도구에 연결하는 표준화된 방법을 제공합니다.

## 주요 특징
- 사전 구축된 통합 기능 제공
- LLM 제공업체 간 유연한 전환 가능
- 인프라 내 데이터 보안을 위한 모범 사례 제공

## 아키텍처
MCP는 호스트 애플리케이션이 여러 서버에 연결할 수 있는 클라이언트-서버 아키텍처를 따릅니다:

- **MCP Hosts**: Claude Desktop, IDE 또는 MCP를 통해 데이터에 접근하고자 하는 AI 도구
- **MCP Clients**: 서버와 1:1 연결을 유지하는 프로토콜 클라이언트
- **MCP Servers**: Model Context Protocol을 통해 특정 기능을 제공하는 경량 프로그램
- **Local Data Sources**: MCP 서버가 안전하게 접근할 수 있는 컴퓨터의 파일, 데이터베이스 및 서비스
- **Remote Services**: MCP 서버가 연결할 수 있는 외부 시스템 (예: API를 통해)

## 참고 링크
- [MCP 공식 문서](https://modelcontextprotocol.io/introduction)
- [MCP GitHub Organization](https://github.com/model-context-protocol)
- [MCP 스펙 문서](https://modelcontextprotocol.io/specification)

## 이 레포지토리의 목적
이 레포지토리는 MCP 테스트 서버를 구축하고 실험하기 위한 프로젝트입니다. 다양한 MCP 기능을 테스트하고 검증하는 것을 목표로 합니다.