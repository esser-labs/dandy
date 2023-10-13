export const sequentialNumbering = (teethInput: string): string => {
  const teeth = teethInput.split(', ')
  const output: string[] = []
  let sectionLength = 0 // 0 index section length to avoid more complicated index math later

  for (let i = 1; i < teeth.length; i++) {
    const nTooth = +teeth[i]
    const prevTooth = +teeth[i - 1]

    if (nTooth !== prevTooth + 1) { // Check if previous tooth is not 1 more than the previous tooth
      const section = sectionLength ? `${prevTooth - sectionLength}-${prevTooth}` : `${prevTooth}` // If there is a sectionLength then create a section, otherwise just the previous number
      output.push(section)
      sectionLength = 0
    } else {
      sectionLength++
    }
    
    if (i === teeth.length - 1) { // Check if last tooth in input
      const section = sectionLength ? `${nTooth - sectionLength}-${nTooth}` : `${nTooth}` // If there is a sectionLength then create a section, otherwise just the last number
      output.push(section)
    }
  }

  return output.join(', ')
}
