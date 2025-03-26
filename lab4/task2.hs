multiplylistno :: [Int] -> Int -> [Int]
multiplylistno  xs n = [x * n | x <- xs]


main :: IO ()
main = do
  let a=[1,2,3,4,5]
  let n= 5
  let result = multiplylistno a n
  putStrLn("the list is " ++ show a) 
  putStrLn("the n is " ++ show n) 
  putStrLn("the result is "++show result)  
