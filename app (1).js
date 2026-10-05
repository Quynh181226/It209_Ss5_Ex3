// Version 1.0.1 - Hotfix Release
const database = [
  {
    id: 1,
    username: "alice",
    email: "alice@example.com",
    password_hash: "$2b$12$e8Y6b9F...",
    credit_card: "4111-2222-3333-4444"
  }
];

function getUserProfile(userId) {
  const user = database.find(u => u.id === userId);
  if (!user) return null;

  // HOTFIX v1.0.1: Đã vá lỗ hổng bảo mật - Sanitize loại bỏ password_hash và credit_card
  return {
    id: user.id,
    username: user.username,
    email: user.email
  };
}

module.exports = { getUserProfile };
