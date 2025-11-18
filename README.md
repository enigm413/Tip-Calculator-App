# Tip Calculator App

A responsive tip calculator application built with HTML, CSS, and vanilla JavaScript. This project features real-time calculations, custom tip input, input validation with error handling, and a clean, modern split-screen interface that adapts seamlessly across all devices.

## Preview

The calculator displays an intuitive split-screen interface featuring:

- Bill amount input with dollar icon
- Five preset tip percentage buttons (5%, 10%, 15%, 25%, 50%)
- Custom tip input option for flexibility
- Number of people selector with person icon
- Real-time tip and total calculations per person
- Interactive reset functionality with state-based styling
- Error handling for invalid inputs with visual feedback
- Smooth transitions and hover effects on all interactive elements

### Project Preview

![Project Preview](/Images/Screenshots/desktop-preview.png)

## Features

- 🎨 Clean, modern split-screen calculator design
- 📱 Fully responsive across 4 breakpoints (Desktop, Small Laptop, Tablet, Mobile)
- 🧮 Real-time tip and total calculations
- ✅ Input validation with automatic error correction
- 💫 Smooth CSS transitions and button states
- 🔤 Google Fonts integration (Space Mono)
- ♿ Semantic HTML structure
- 🎯 Custom tip percentage input option
- 📦 Lightweight vanilla JavaScript (no dependencies)
- 🔢 Automatic number formatting to 2 decimal places
- 🎨 Dynamic button selection states
- 🚫 Division by zero prevention with error messaging
- 🔄 One-click reset functionality

## Technologies Used

- HTML5
- CSS3 (CSS Grid & Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Space Mono)

## Project Structure

```
project-root/
│
├── index.html              # Main HTML file
├── Stylesheets/
│   ├── style.css           # Main stylesheet
│   └── query.css           # Responsive media queries
├── script.js               # JavaScript functionality
├── README.md               # Project Documentation
└── Images/
    ├── logo.svg                    # App logo
    ├── icon-dollar.svg             # Bill input icon
    ├── icon-person.svg             # People input icon
    └── screenshots/
        └── desktop-preview.png     # Desktop screenshot
```

## Usage

The calculator works automatically with real-time updates:

1. Enter the **bill amount** in the first input field
2. Select a **tip percentage** (5%, 10%, 15%, 25%, 50%) or enter a custom amount
3. Enter the **number of people** splitting the bill
4. View the calculated **tip per person** and **total per person**
5. Click **RESET** to clear all inputs and start over

**Error Handling:**

- Entering "0" people displays "Can't be zero" error message
- Invalid characters are automatically filtered from inputs
- Division by zero is prevented with error state styling

No additional configuration required!

## Design Specifications

### Colors

#### Background & Cards

- **Page Background**: `hsl(185, 41%, 84%)` - Light grayish cyan
- **Calculator Card**: `hsl(0, 100%, 100%)` - White
- **Output Panel**: `hsl(183, 100%, 15%)` - Very dark cyan
- **Input Background**: `hsl(189, 47%, 97%)` - Very light grayish cyan

#### Button Colors

- **Tip Button Default**: `hsl(183, 100%, 15%)` - Very dark cyan
- **Tip Button Hover**: `hsl(185, 41%, 84%)` - Light grayish cyan
- **Tip Button Selected**: `hsl(172, 67%, 45%)` - Strong cyan
- **Reset Button Default**: `hsl(186, 14%, 43%)` - Dark grayish cyan (disabled)
- **Reset Button Active**: `hsl(172, 67%, 45%)` - Strong cyan (enabled)
- **Reset Button Hover**: `hsl(185, 41%, 84%)` - Light grayish cyan

#### Text Colors

- **Primary Text**: `hsl(183, 100%, 15%)` - Very dark cyan
- **Labels**: `hsl(186, 14%, 43%)` - Dark grayish cyan
- **Output Titles**: `hsl(185, 41%, 84%)` - Light grayish cyan
- **Output Values**: `hsl(172, 67%, 45%)` - Strong cyan
- **Placeholder**: `hsl(172, 67%, 45%)` - Strong cyan
- **Error Message**: `hsl(0, 100%, 59%)` - Bright red

#### Focus & Error States

- **Input Focus**: `2px solid hsl(184, 14%, 56%)` - Grayish cyan outline
- **Input Error**: `2px solid hsl(0, 100%, 59%)` - Red outline

### Typography

- **Font Family**: Space Mono (Google Fonts, Monospace)
- **Base Font Size**: 16px (1.6rem)
- **Labels**: 14px (1.4rem), weight: 600
- **Error Message**: 13px (1.3rem)
- **Inputs**: 20px (2rem), weight: 600
- **Tip Buttons**: 20px (2rem), weight: 600
- **Output Titles**: 14px (1.4rem), weight: 600
- **Output Subtitles**: 12px (1.2rem), weight: 500
- **Output Prices**: 40px (4rem), weight: 600
- **Reset Button**: 16px (1.6rem), weight: 600

### Layout

#### Desktop (>900px)

- **Container Max Width**: 800px (80rem)
- **Grid Layout**: 2 equal columns (form | output)
- **Gap**: 32px (3.2rem)
- **Card Padding**: 32px (3.2rem)
- **Form Padding**: 20px top/bottom
- **Tip Buttons**: 3 columns grid

#### Small Laptop (≤900px)

- **HTML Font Size**: 56.25% (9px base)
- **Container Margin**: 96px auto
- **Logo Margin**: 48px bottom
- **Card Padding**: 24px (2.4rem)
- **Output Price**: 32px (3.2rem)

#### Tablet (≤660px)

- **Grid Layout**: Single column (stacked)
- **Page Padding**: 0 36px
- **Form section on top**
- **Output panel below**

#### Mobile (≤450px)

- **Page Padding**: 12px (1.2rem)
- **Card Padding**: 12px (1.2rem)
- **Tip Buttons**: 2 columns grid

### Input Specifications

- **Border Radius**: 8px (0.8rem)
- **Input Padding**: 12px 28px (1.2rem 2.8rem)
- **Button Padding**: 8px (0.8rem)
- **Icon Position**: Left 20px, center vertically
- **Text Alignment**: Right-aligned for inputs
- **Focus Outline**: 2px solid grayish cyan

## JavaScript Functionality

### Input Validation & Sanitization

```javascript
function handleInput(inputVal) {
  const userInput = Number(inputVal);
  const prevUserInput = Number(inputVal.slice(0, -1));
  const currentUserInput = isNaN(userInput) ? prevUserInput : userInput;
  return currentUserInput;
}
```

**Features:**

- Prevents non-numeric characters automatically
- Automatically corrects invalid input in real-time
- Returns last valid value if NaN is detected
- Ensures clean number parsing for calculations

### Tip Calculation Logic

```javascript
function renderData() {
  if (people > 0) {
    tip = tipPercent === 0 ? tip : (tipPercent / 100) * bill;
    tipPerPersonEl.textContent = `$ ${(tip / people).toFixed(2)}`;
    totalPerPersonEl.textContent = `$ ${((bill + tip) / people).toFixed(2)}`;
    resetBtnEl.classList.add("bgcolor--green400");
  }
}
```

**Features:**

- Real-time calculation on every input change
- Prevents division by zero errors
- Formats currency to 2 decimal places
- Updates reset button state dynamically
- Handles both preset and custom tip values

### Button State Management

```javascript
function handleTipButton(currentBtnEl) {
  const btnText = currentBtnEl.textContent;
  tipPercent = Number(btnText.slice(0, -1));
  currentBtnEl.classList.add("selected-tip");

  if (prevbtnEl) {
    prevbtnEl.classList.remove("selected-tip");
  }

  prevbtnEl = currentBtnEl;
  renderData();
}
```

**Features:**

- Tracks previous button selection for cleanup
- Removes old active states before applying new
- Extracts percentage value from button text
- Triggers recalculation automatically

### Error Handling

```javascript
peopleInputEl.addEventListener("input", (event) => {
  people = handleInput(event.target.value);
  peopleInputEl.value = people;

  if (peopleInputEl.value === "0") {
    peopleInputEl.classList.add("input--error");
    errorMsgEl.classList.remove("display--none");
    tipPerPersonEl.textContent = "$ 0.00";
    totalPerPersonEl.textContent = "$ 0.00";
  } else {
    peopleInputEl.classList.remove("input--error");
    errorMsgEl.classList.add("display--none");
    renderData();
  }
});
```

**Features:**

- Displays "Can't be zero" error message
- Adds red outline to input field for visibility
- Resets output display to $0.00
- Prevents calculation errors from invalid input

### Reset Functionality

```javascript
resetBtnEl.addEventListener("click", () => {
  bill = 0;
  tip = 0;
  tipPercent = 0;
  people = 0;
  billInputEl.value = "";
  peopleInputEl.value = "";
  customTipInputEl.value = "";
  prevbtnEl.classList.remove("selected-tip");
  resetBtnEl.classList.add("bgcolor--grey500");
  tipPerPersonEl.textContent = "$ 0.00";
  totalPerPersonEl.textContent = "$ 0.00";
});
```

**Features:**

- Clears all input field values
- Resets all calculation variables to zero
- Removes button selection states
- Returns reset button to disabled state
- Resets output displays to default

## Calculation Formulas

### Tip Per Person

```javascript
tipPerPerson = (bill * (tipPercent / 100)) / numberOfPeople;
```

### Total Per Person

```javascript
totalPerPerson = (bill + tip) / numberOfPeople;
```

### Custom Tip

```javascript
tipPerPerson = customTipAmount / numberOfPeople;
totalPerPerson = (bill + customTipAmount) / numberOfPeople;
```

## Responsive Breakpoints

The calculator uses four carefully planned breakpoints:

1. **Desktop**: Above 900px - Two-column grid layout with full features
2. **Small Laptop**: 660px - 900px - Reduced font sizes, maintained layout
3. **Tablet**: 450px - 660px - Single column stack layout
4. **Mobile**: Below 450px - Compact single column, 2-column tip buttons

## Accessibility Features

- Semantic HTML form structure with proper elements
- Proper label associations with `for` attributes
- Alt text for SVG icons
- Keyboard accessible buttons and inputs
- Clear error messaging for validation
- Sufficient color contrast (WCAG AA compliant)
- Focus states on all interactive elements
- ARIA labels for custom input fields

## Key CSS Techniques Used

- **CSS Grid**: Two-column layout and tip button grid system
- **Flexbox**: Form layout and output item alignment
- **REM Units**: Scalable, accessible typography (62.5% base)
- **Media Queries**: Four responsive breakpoints in separate file
- **Background Images**: SVG icons positioned in input fields
- **Custom Focus States**: Outlined inputs on focus
- **Utility Classes**: Reusable state classes (.display--none, .input--error)
- **Hover Effects**: Interactive button feedback
- **Dynamic Classes**: State-based styling with JavaScript

## Key JavaScript Features

- **Input Validation**: Real-time character filtering and sanitization
- **Number Parsing**: Safe conversion with NaN handling
- **State Management**: Tracking button selections and input values
- **Event Listeners**: Input, click, and change events
- **DOM Manipulation**: Dynamic class and content updates
- **String Methods**: Slicing for percentage extraction from text
- **Mathematical Operations**: Division, multiplication, percentage calculations
- **Conditional Logic**: Error prevention and state handling
- **ES6 Syntax**: Arrow functions, const/let, template literals

## Credits

This project is a solution for a Frontend Mentor challenge, designed to help improve front-end coding skills through practical calculator development with real-time calculations and comprehensive input validation.

## License

This project is open source and available for personal and educational use.

---

**Built with ❤️ using HTML, CSS, Vanilla JavaScript, and mathematical precision**
