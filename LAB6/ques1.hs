applyop :: (Int -> Int -> Int) -> Int -> [Int] -> Int
applyop = foldr

soln :: (Int -> Int -> Int) -> Int -> [Int] -> Int
soln op base list = applyop op base (map (^2) (filter even list))

main :: IO ()
main = do
    let input = [1, 2, 3, 4, 5, 6]
    putStrLn ("Sum of squares of evens: " ++show (soln (+) 0 input))
    putStrLn ("Product of squares of evens: " ++show (soln (*) 1 input))
