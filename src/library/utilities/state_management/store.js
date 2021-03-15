export const store = {
  initial: Object.assign(
    {
      darkMode: {
        active: true
      }
    }
  ),

  Actions: (update, getState) => ({
      darkModeToggle: () => update({ darkMode: { active: isActive => !isActive } })
  })
}