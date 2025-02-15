import { v4 as uuidv4 } from "uuid";

/**
 * Generates an invite code in the format "XXXXXXXX"
 * @returns {string} an invite code
 */
export function generateInviteCode() {
  return uuidv4().replace(/-/g, "").substring(0, 8);
}

/**
 * Generates a task code in the format "task-XXX"
 * @returns {string} a task code
 */
export function generateTaskCode() {
  return `task-${uuidv4().replace(/-/g, "").substring(0, 3)}`;
}
