const FORMS = {
  cover: {
    title: '커버곡 신청 양식',
    sections: [
      { title: '0. 작업 파일', note: '녹음본·원본·INST를 하나의 ZIP 파일로 압축하여 전달해주세요.', fields: [
        { label: '다운로드 링크', type: 'url', placeholder: 'https://', wide: true }
      ] },
      { title: '1. 원곡', fields: [
        { label: '원곡 링크', type: 'url', placeholder: 'https://', wide: true },
        { label: '곡 길이', placeholder: '예: 3분 30초' },
        { label: '짧은 커버 작업 구간', placeholder: '예: 00:35–01:42' },
        { label: '키 조정 여부', placeholder: '예: 원키 / -2키' }
      ] },
      { title: '2. 곡 정보', fields: [
        { label: '가수 / 곡 제목', placeholder: '가수명 / 곡 제목', wide: true },
        { label: '보컬 인원', placeholder: '예: 1명' },
        { label: '보컬 트랙 구성', type: 'textarea', placeholder: '메인·더블·화음·코러스 등 트랙 구성을 적어주세요.' }
      ] },
      { title: '3. 신청 항목', fields: [
        { label: '신청 항목', type: 'checkbox', options: ['에디팅', '인공화음', '2트랙 믹스', 'STEM 믹스', '마스터링', '커버 Light', '커버 Full'] },
        { label: '세부 옵션', type: 'textarea', placeholder: '필요한 세부 옵션을 적어주세요.' },
        { label: '빠른 마감', type: 'radio', options: ['일반', '5일', '3일', '24시간'] }
      ] },
      { title: '4. 사용처', fields: [
        { label: '업로드 예정 채널 URL', type: 'url', placeholder: 'https://', wide: true },
        { label: '사용 구분', type: 'checkbox', options: ['개인·동인', '방송·수익화', '기업·기관'] },
        { label: '공개 또는 발매 예정일', placeholder: '예: 2026년 12월 예정' }
      ] },
      { title: '5. 요청 사항', fields: [
        { label: '요청 사항', type: 'textarea', placeholder: '키 조정, 개사, 레퍼런스 링크, 원하는 보컬·믹스 방향 등을 적어주세요.' }
      ] },
      { title: '6. 성인 여부', fields: [
        { label: '성인 여부', type: 'radio', options: ['성인', '미성년자(법정대리인 동의 완료)'] }
      ] },
      { title: '7. 환불 및 작업 규정 확인', fields: [
        { label: '위 환불 및 작업 규정을 확인했습니다', type: 'radio', options: ['네', '아니요'] }
      ] }
    ]
  },
  recording: {
    title: '레코딩·보컬 디렉팅 신청 양식',
    sections: [
      { title: '1. 신청 서비스', fields: [
        { label: '신청 서비스', type: 'radio', options: ['레코딩', '디렉팅', '레코딩+디렉팅'] },
        { label: '희망 시간', placeholder: '예: 1프로 / 2시간' }
      ] },
      { title: '2. 곡 정보', fields: [
        { label: '원곡 또는 데모 링크', type: 'url', placeholder: 'https://', wide: true },
        { label: '가수 / 곡 제목', placeholder: '가수명 / 곡 제목', wide: true },
        { label: '곡 길이 / 희망 키', placeholder: '예: 3분 30초 / 원키' },
        { label: '보컬 인원', placeholder: '예: 1명' },
        { label: '곡 구분', type: 'radio', options: ['오리지널곡', '커버곡'] }
      ] },
      { title: '3. 준비 자료', fields: [
        { label: '준비 자료', type: 'checkbox', options: ['INST', '가사', '가이드 보컬', '코러스·화음 가이드', '악보 또는 멜로디 자료'] }
      ] },
      { title: '4. 희망 일정', fields: [
        { label: '가능한 날짜와 시간대', type: 'textarea', placeholder: '가능한 일정을 여러 개 적어주세요.' }
      ] },
      { title: '5. 녹음 목적', fields: [
        { label: '녹음 목적', type: 'checkbox', options: ['개인 소장', '유튜브·방송', '음원 발매', '기업·기관', '기타'] }
      ] },
      { title: '6. 요청 사항', fields: [
        { label: '요청 사항', type: 'textarea', placeholder: '원하는 창법·감정·레퍼런스, 어려운 구간, 녹음 경험 여부 등을 적어주세요.' }
      ] },
      { title: '7. 성인 여부', fields: [
        { label: '성인 여부', type: 'radio', options: ['성인', '미성년자(법정대리인 동의 완료)'] }
      ] },
      { title: '8. 환불 및 작업 규정 확인', fields: [
        { label: '일정 확정 후 취소 및 세션 시작 후 환불 규정을 확인했습니다', type: 'radio', options: ['네', '아니요'] }
      ] }
    ]
  },
  original: {
    title: '오리지널곡 패키지 신청 양식',
    sections: [
      { title: '1. 신청 패키지', fields: [
        { label: '신청 패키지', type: 'radio', options: ['오리지널 음원', '오리지널 발매', 'Light MV', 'Premium MV', '상담 후 결정'] }
      ] },
      { title: '2. 현재 준비 상태', fields: [
        { label: '준비된 항목', type: 'checkbox', options: ['작사', '탑라인', '작곡', '편곡', '가이드', '녹음', '일러스트', 'MV'] },
        { label: '기존 자료 링크', type: 'url', placeholder: 'https://', wide: true }
      ] },
      { title: '3. 곡 정보', fields: [
        { label: '장르 / 예상 곡 길이', placeholder: '예: 팝 발라드 / 3분 30초' },
        { label: '보컬 인원 / 희망 음역 또는 키', placeholder: '예: 1명 / 원키' },
        { label: '참고곡 및 레퍼런스 링크', type: 'textarea', placeholder: '링크를 여러 개 입력할 수 있습니다.' },
        { label: '원하는 분위기·주제·감정선', type: 'textarea', placeholder: '곡의 방향을 자세히 적어주세요.' }
      ] },
      { title: '4. 아티스트 및 발매 정보', fields: [
        { label: '활동명', placeholder: '아티스트 활동명' },
        { label: '사용 구분', type: 'checkbox', options: ['개인·동인', '방송·수익화', '기업·기관'] },
        { label: '발매 또는 공개 예정 채널 / 희망 발매일', type: 'textarea', placeholder: '예정 채널과 희망 날짜를 적어주세요.' },
        { label: '음원 유통 대행 / MV 심의 필요 여부', type: 'textarea', placeholder: '필요 여부와 세부 내용을 적어주세요.' }
      ] },
      { title: '5. MV 신청 시', fields: [
        { label: 'MV 패키지', type: 'radio', options: ['Light MV', 'Premium MV', '미신청'] },
        { label: '캐릭터 또는 기존 디자인 보유 여부', placeholder: '예: 보유 / 미보유' },
        { label: '원하는 영상 콘셉트 / 참고 영상', type: 'textarea', placeholder: '콘셉트와 참고 링크를 적어주세요.' },
        { label: '일러스트 희망 장수 / 쇼츠 영상 필요 여부', placeholder: '예: 3장 / 필요' }
      ] },
      { title: '6. 실연 세션', fields: [
        { label: '실연 세션', type: 'radio', options: ['필요 없음', '상담 필요', '희망 세션 있음'] },
        { label: '희망 세션 상세', type: 'textarea', placeholder: '필요한 악기 또는 세션을 적어주세요.' }
      ] },
      { title: '7. 예산 및 일정', fields: [
        { label: '전체 예산', placeholder: '예상 예산 범위' },
        { label: '희망 마감일', placeholder: '예: 2026년 12월 20일' }
      ] },
      { title: '8. 기타 요청 사항', fields: [
        { label: '기타 요청 사항', type: 'textarea', placeholder: '크레딧, 가사·세계관, 레퍼런스, 금지 요소 등을 적어주세요.' }
      ] },
      { title: '9. 성인 여부', fields: [
        { label: '성인 여부', type: 'radio', options: ['성인', '미성년자(법정대리인 동의 완료)'] }
      ] },
      { title: '10. 환불 및 작업 규정 확인', fields: [
        { label: '관련 규정을 확인했습니다', type: 'radio', options: ['네', '아니요'] }
      ] }
    ]
  },
  live: {
    title: '라이브 AR 제작 신청 양식',
    sections: [
      { title: '1. 작업 파일', fields: [
        { label: '필요한 파일의 압축 링크', type: 'url', placeholder: 'INST·보컬·코러스 파일 링크', wide: true }
      ] },
      { title: '2. 곡 정보', fields: [
        { label: '가수 / 곡 제목 / 곡 길이', placeholder: '가수명 / 곡 제목 / 곡 길이', wide: true },
        { label: '원곡 또는 참고 링크', type: 'url', placeholder: 'https://', wide: true },
        { label: '라이브에서 사용할 키', placeholder: '예: 원키 / -2키' }
      ] },
      { title: '3. 사용 목적', fields: [
        { label: '사용 목적', type: 'checkbox', options: ['방송', '공연', '행사', '오디션', '개인 연습', '기타'] }
      ] },
      { title: '4. 희망 제작 방향', fields: [
        { label: '보컬을 비울 구간', type: 'textarea', placeholder: '타임코드와 구간을 적어주세요.' },
        { label: '코러스·더블·애드리브 유지 여부', placeholder: '유지할 요소를 적어주세요.' },
        { label: '라이브용 큐·카운트 필요 여부', placeholder: '예: 필요 / 불필요' },
        { label: '페이드 인·아웃 및 곡 구조 변경', type: 'textarea', placeholder: '필요한 변경 내용을 적어주세요.' },
        { label: '기타 요청 사항', type: 'textarea', placeholder: '추가 요청 사항을 적어주세요.' }
      ] },
      { title: '5. 일정', fields: [
        { label: '사용 예정일', placeholder: '예: 2026년 12월 20일' },
        { label: '희망 납품일', placeholder: '예: 2026년 12월 15일' },
        { label: '빠른 마감 요청 여부', placeholder: '예: 일반 / 3일 마감' }
      ] },
      { title: '6. 성인 여부', fields: [
        { label: '성인 여부', type: 'radio', options: ['성인', '미성년자(법정대리인 동의 완료)'] }
      ] },
      { title: '7. 환불 및 작업 규정 확인', fields: [
        { label: '위 라이브 AR 환불 규정을 확인했습니다', type: 'radio', options: ['네', '아니요'] }
      ] }
    ]
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const filterButtons = document.querySelectorAll('[data-filter]');
const workCards = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  workCards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

document.querySelectorAll('.faq button').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('article');
  const open = item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.querySelector('span').textContent = open ? '−' : '+';
}));

const dialog = document.querySelector('#form-dialog');
const formTitle = document.querySelector('#form-title');
const formContent = document.querySelector('#form-content');
const copyButton = document.querySelector('#copy-form');
const applicationForm = document.querySelector('#application-form');

function buildApplicationForm(form, formKey) {
  formContent.replaceChildren();

  form.sections.forEach((section, sectionIndex) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'application-section';

    const legend = document.createElement('legend');
    legend.textContent = section.title;
    fieldset.append(legend);

    if (section.note) {
      const note = document.createElement('p');
      note.className = 'application-note';
      note.dataset.copyNote = '';
      note.textContent = section.note;
      fieldset.append(note);
    }

    const fields = document.createElement('div');
    fields.className = 'application-fields';

    section.fields.forEach((field, fieldIndex) => {
      const fieldId = `${formKey}-${sectionIndex}-${fieldIndex}`;
      const isChoice = field.type === 'checkbox' || field.type === 'radio';
      const wrapper = document.createElement(isChoice ? 'div' : 'label');
      wrapper.className = `application-field${field.wide || field.type === 'textarea' || isChoice ? ' wide' : ''}`;
      wrapper.dataset.copyField = '';
      wrapper.dataset.copyLabel = field.label;

      const label = document.createElement(isChoice ? 'p' : 'span');
      label.className = 'application-label';
      label.textContent = field.label;
      wrapper.append(label);

      if (isChoice) {
        const choices = document.createElement('div');
        choices.className = 'application-choices';
        field.options.forEach((option, optionIndex) => {
          const optionLabel = document.createElement('label');
          optionLabel.className = 'application-choice';
          const input = document.createElement('input');
          input.type = field.type;
          input.name = fieldId;
          input.value = option;
          input.id = `${fieldId}-${optionIndex}`;
          const text = document.createElement('span');
          text.textContent = option;
          optionLabel.append(input, text);
          choices.append(optionLabel);
        });
        wrapper.append(choices);
      } else {
        const control = document.createElement(field.type === 'textarea' ? 'textarea' : 'input');
        control.className = 'application-control';
        control.id = fieldId;
        control.name = fieldId;
        if (control instanceof HTMLInputElement) control.type = field.type === 'url' ? 'url' : 'text';
        if (field.placeholder) control.placeholder = field.placeholder;
        if (control instanceof HTMLTextAreaElement) control.rows = 4;
        wrapper.htmlFor = fieldId;
        wrapper.append(control);
      }

      fields.append(wrapper);
    });

    fieldset.append(fields);
    formContent.append(fieldset);
  });
}

function getApplicationText() {
  const blocks = [formTitle.textContent];

  formContent.querySelectorAll('.application-section').forEach(section => {
    const lines = [section.querySelector('legend')?.textContent || ''];
    const note = section.querySelector('[data-copy-note]')?.textContent;
    if (note) lines.push(note);

    section.querySelectorAll('[data-copy-field]').forEach(field => {
      const controls = [...field.querySelectorAll('input, textarea')];
      const isChoice = controls.some(control => control.type === 'checkbox' || control.type === 'radio');
      const value = isChoice
        ? controls.filter(control => control.checked).map(control => control.value).join(', ')
        : (controls[0]?.value || '').trim();
      const shownValue = value ? (value.includes('\n') ? `\n${value}` : value) : '(미작성)';
      lines.push(`${field.dataset.copyLabel}: ${shownValue}`);
    });

    blocks.push(lines.join('\n'));
  });

  return blocks.join('\n\n');
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // file:// 미리보기 등 Clipboard API가 제한된 환경에서는 아래 방식을 사용합니다.
    }
  }

  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.opacity = '0';
  document.body.append(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  if (!copied) throw new Error('copy-failed');
}

document.querySelectorAll('[data-form]').forEach(button => button.addEventListener('click', () => {
  const form = FORMS[button.dataset.form];
  formTitle.textContent = form.title;
  buildApplicationForm(form, button.dataset.form);
  copyButton.textContent = '작성 내용 복사하기';
  dialog.scrollTop = 0;
  dialog.showModal();
  document.body.classList.add('dialog-open');
  window.setTimeout(() => formContent.querySelector('input, textarea')?.focus(), 0);
}));
applicationForm?.addEventListener('submit', event => event.preventDefault());
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
copyButton?.addEventListener('click', async () => {
  const text = getApplicationText();
  try {
    await copyTextToClipboard(text);
    copyButton.textContent = '작성 내용 복사 완료 ✓';
    window.setTimeout(() => { copyButton.textContent = '작성 내용 복사하기'; }, 1800);
  } catch {
    window.prompt('아래 작성 내용을 직접 복사해 주세요.', text);
  }
});

const cursorLight = document.querySelector('[data-cursor-light]');
const canUseCursorLight = window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (cursorLight && canUseCursorLight) {
  window.addEventListener('pointermove', event => {
    cursorLight.style.transform = `translate3d(${event.clientX - 210}px, ${event.clientY - 210}px, 0)`;
    cursorLight.classList.add('active');
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cursorLight.classList.remove('active'));
}
