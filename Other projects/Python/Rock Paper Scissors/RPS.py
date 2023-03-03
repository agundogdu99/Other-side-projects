import random
from time import sleep

print("Welcome to Ahmet's Rock Paper Scissors Game...")

counter = 0
userScore = 0
aiScore = 0
rounds = 0


def startGameParameters():
    global rounds, counter, userScore, aiScore
    rounds = int(
        input(
            "How many rounds would you like to play? (Between 1 - 10) Even results do not increase counter...  - "
        ))
    counter = 0
    userScore = 0
    aiScore = 0
    userSelection()


def userSelection():
    try:
        noSelection = True
        while noSelection:
            askUser = input(
                "What is your choice?\nType in...\n1 for Rock\n2 for Paper\n3 for Scissors\nOr press 9 to exit\n"
            )
            if askUser == '1':
                print('User chooses Rock')
                userChoice = 'Rock'
            elif askUser == '2':
                print('User chooses Paper')
                userChoice = 'Paper'
            elif askUser == '3':
                print('User chooses Scissors')
                userChoice = 'Scissors'
            elif askUser == '9':
                print("Exiting...")
                break
            else:
                print(
                    "Error... Please ensure you select on of the available options"
                )
            getResult(userChoice, randomGenerate())
    except:
        pass


def randomGenerate():
    randomNum = random.randint(1, 3)
    if randomNum == 1:
        print('Computer chooses Rock')
        return 'Rock'
    elif randomNum == 2:
        print('Computer chooses Paper')
        return 'Paper'
    else:
        print('Computer chooses Scissors')
        return 'Scissors'


def getResult(user, computer):

    print(f'User: {user} - Computer: {computer}')
    if user == computer:
        result = 0
    elif (user == 'Rock' and computer == 'Scissors') or (
            user == 'Paper'
            and computer == 'Rock') or (user == 'Scissors'
                                        and computer == 'Paper'):
        result = 1
    else:
        result = -1
    updateScore(result)


def updateScore(result):
    global counter, userScore, aiScore
    if result == 0:
        print('This round resulted in a draw... Battle again!')
    elif result == 1:
        print('User won this round!...')
        # counter += 1
        userScore += 1
    else:
        print('Computer won this round!...')
        # counter += 1
        aiScore += 1
    print(f"User Score: {userScore} - Computer Score: {aiScore}")
    playGame()


def playGame():
    if rounds == 0:
        startGameParameters()
    elif rounds > userScore and rounds > aiScore:
        userSelection()
    else:
        print('Game Over!')
        if rounds == userScore:
            print("The USER wins this game")
        else:
            print("Computer wins")
        playAgain = input('Would you like to play again? Y/N? ').upper()
        if playAgain == 'Y':
            startGameParameters()
        else:
            print('Goodbye...')


playGame()