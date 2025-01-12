applyOp :: (a -> a -> a) -> [a] -> a
applyOp = foldl1

main :: IO ()
main = do
  putStrLn "Enter operation (+ or *):"
  opInput <- getLine
  let op = if opInput == "+" then (+) else (*)
  putStrLn "Enter two numbers separated by space:"
  numbersInput <- getLine
  let numbers = map read (words numbersInput) :: [Int]
  print (applyOp op numbers)


