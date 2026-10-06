# 徐ゼミ / Xu Seminar — 준비용 홈페이지

URL (GitHub Pages가 main 브랜치의 루트에서 배포 중이라면):
https://cretiq-max.github.io/zemi/

**현재는 운영 전 디자인 시안**입니다. 실제 제미 개설, 대학 임용, 학생·졸업생, 학회 발표 실적을 표시하지 않습니다.
루트의 기존 졸업 축하 홈페이지와 /ybc2027/은 변경하지 않았습니다.

## 자료실 운영법
1. 공개해도 되는 PDF 또는 PPTX 파일을 /zemi/materials/ 폴더에 업로드합니다.
2. /zemi/content.js의 materials 배열에 아래 형식으로 자료를 추가합니다.
```js
{
  title: { ja:"学会報告タイトル", ko:"학회 발표 제목", en:"Conference presentation" },
  kind: "PDF",
  date: "2027-05-01",
  url: "./materials/example.pdf"
}
```
3. GitHub Pages가 갱신되면 자료실에서 **열람 / 다운로드 / QR** 기능을 이용할 수 있습니다.
4. 발표에 배포할 QR은 자료 개별 URL로 만들면 됩니다. 예:
   https://cretiq-max.github.io/zemi/materials/example.pdf
5. 공개 URL의 QR을 보여 주면 방문자는 승인 없이 접근할 수 있습니다. PPTX는 브라우저에서 미리보기보다 다운로드가 시작될 수 있습니다. 파일 삭제 전까지 공개 상태이며 검색엔진에도 색인될 수 있습니다.

**중요:** GitHub Pages는 비밀번호, 로그인, 승인 설정을 제공하지 않는 공개 배포 방식입니다. 미공개 연구, 타인 사진 및 개인정보, 학회·출판사의 재배포 제한 문서는 올리지 마세요.
현재 QR 미리보기 버튼은 외부 QR 서비스로 URL을 보내 생성합니다. 자료의 주소 자체가 제3자 서비스에 전달되는 점을 인지하세요. 실제 발표용 QR 이미지는 별도의 오프라인 방식으로 생성할 수 있습니다.

## 게시물과 연도별 기록
/zemi/content.js의 activities 및 years 배열을 수정합니다. 예제 활동은 sample:true 로 표시하며 실재 활동이 아닙니다.
학생의 이름·사진·진로·논문은 공개 전 서면이나 기록 가능한 명시적 동의를 얻어야 합니다.

## 정식 공개 전 SEO
/zemi/index.html의 robots 메타 태그는 현재 `noindex,follow`입니다. 시안 검색 노출을 피하기 위한 설정입니다. 대학, 모집 연도, 실재 기록이 확정된 이후에만 `index,follow`로 변경하고 Search Console에 등록하세요.

## 배포 설정
GitHub Settings → Pages → Deploy from a branch → main → /(root).
이 폴더는 기존 사이트의 루트 홈페이지를 덮어쓰지 않습니다.
