const file = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const chatAssets = {
  back: file("/assets/chat/icon-back.svg"),
  close: file("/assets/chat/icon-close.svg"),
  send: file("/assets/chat/icon-send.svg"),
  sendDisabled: file("/assets/chat/icon-send-disabled.svg"),
  intercom: file("/assets/chat/icon-intercom.svg"),
  statusSpin: file("/assets/chat/icon-status-spin.svg"),
  edit: file("/assets/chat/icon-edit.svg"),
  check: file("/assets/chat/icon-check.svg"),
  chevronLeft: file("/assets/chat/icon-chevron-left.svg"),
  chevronRight: file("/assets/chat/icon-chevron-right.svg"),
  checkBox: file("/assets/chat/icon-check-box.svg"),
  checkBoxEmpty: file("/assets/chat/icon-check-box-empty.svg"),
};
